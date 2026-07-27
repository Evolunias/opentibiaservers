import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-screenshots-server-brazil');
}

export default function RubinotWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-screenshots-server-brazil" />;
}
