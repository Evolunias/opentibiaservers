import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-screenshots-server-france');
}

export default function RubinotWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-screenshots-server-france" />;
}
