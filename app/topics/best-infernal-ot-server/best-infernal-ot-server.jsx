import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-server');
}

export default function BestInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-server" />;
}
