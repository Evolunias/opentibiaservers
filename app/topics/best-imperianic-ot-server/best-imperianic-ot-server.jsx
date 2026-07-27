import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-ot-server');
}

export default function BestImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-ot-server" />;
}
