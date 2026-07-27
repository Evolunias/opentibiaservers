import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-ot-server');
}

export default function BestRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-realera-ot-server" />;
}
