import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-non-pvp-server');
}

export default function Cyntara96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-non-pvp-server" />;
}
