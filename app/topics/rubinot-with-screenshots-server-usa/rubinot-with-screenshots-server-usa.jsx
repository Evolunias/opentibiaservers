import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-screenshots-server-usa');
}

export default function RubinotWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-screenshots-server-usa" />;
}
