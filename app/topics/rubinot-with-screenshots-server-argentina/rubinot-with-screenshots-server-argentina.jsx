import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-screenshots-server-argentina');
}

export default function RubinotWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-screenshots-server-argentina" />;
}
