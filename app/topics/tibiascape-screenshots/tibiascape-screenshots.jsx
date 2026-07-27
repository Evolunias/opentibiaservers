import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-screenshots');
}

export default function TibiascapeScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-screenshots" />;
}
