import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-server');
}

export default function BestZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-server" />;
}
