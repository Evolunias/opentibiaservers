import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-private-server');
}

export default function CustomInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-private-server" />;
}
