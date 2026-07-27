import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-screenshots');
}

export default function TibijkaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibijka-screenshots" />;
}
