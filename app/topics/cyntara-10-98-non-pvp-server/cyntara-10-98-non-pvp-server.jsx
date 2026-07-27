import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-98-non-pvp-server');
}

export default function Cyntara1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-98-non-pvp-server" />;
}
