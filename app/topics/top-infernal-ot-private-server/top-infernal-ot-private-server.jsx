import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-private-server');
}

export default function TopInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-private-server" />;
}
