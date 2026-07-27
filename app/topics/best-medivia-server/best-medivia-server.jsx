import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-server');
}

export default function BestMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-server" />;
}
