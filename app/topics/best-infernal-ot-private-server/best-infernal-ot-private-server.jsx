import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-private-server');
}

export default function BestInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-private-server" />;
}
