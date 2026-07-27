import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-north-america');
}

export default function TibiascapeWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-north-america" />;
}
