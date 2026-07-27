import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-uk');
}

export default function TibiascapeWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-uk" />;
}
