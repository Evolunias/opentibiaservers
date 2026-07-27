import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-ot-server');
}

export default function BestRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-ot-server" />;
}
