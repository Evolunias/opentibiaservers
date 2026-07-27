import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-screenshots');
}

export default function OtlandScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="otland-screenshots" />;
}
