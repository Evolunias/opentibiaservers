import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-mexico');
}

export default function TibiascapeWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-mexico" />;
}
