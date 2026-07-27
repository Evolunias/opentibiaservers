import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-canada');
}

export default function TibiascapeWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-canada" />;
}
