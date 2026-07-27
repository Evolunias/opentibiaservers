import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-ot-server');
}

export default function BestBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-ot-server" />;
}
