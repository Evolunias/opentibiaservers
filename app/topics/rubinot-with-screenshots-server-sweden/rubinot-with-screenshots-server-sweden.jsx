import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-screenshots-server-sweden');
}

export default function RubinotWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-screenshots-server-sweden" />;
}
