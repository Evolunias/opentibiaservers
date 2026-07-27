import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-non-pvp-server');
}

export default function Cyntara14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-non-pvp-server" />;
}
