import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-non-pvp-server');
}

export default function Cyntara772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-non-pvp-server" />;
}
