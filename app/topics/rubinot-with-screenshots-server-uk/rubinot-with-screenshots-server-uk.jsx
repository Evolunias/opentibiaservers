import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-screenshots-server-uk');
}

export default function RubinotWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-screenshots-server-uk" />;
}
