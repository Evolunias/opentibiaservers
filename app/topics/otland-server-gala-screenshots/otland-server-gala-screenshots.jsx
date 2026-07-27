import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-screenshots');
}

export default function OtlandServerGalaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-screenshots" />;
}
