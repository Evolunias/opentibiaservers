import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-non-pvp-server');
}

export default function Cyntara15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-non-pvp-server" />;
}
