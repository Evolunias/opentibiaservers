import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-screenshots-server-poland');
}

export default function RubinotWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-screenshots-server-poland" />;
}
