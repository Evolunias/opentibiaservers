import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-medivia-server');
}

export default function PvpeMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-medivia-server" />;
}
