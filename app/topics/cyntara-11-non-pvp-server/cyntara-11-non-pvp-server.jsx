import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-non-pvp-server');
}

export default function Cyntara11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-non-pvp-server" />;
}
