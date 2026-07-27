import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-9-6-non-pvp-server');
}

export default function Noxiousot96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-9-6-non-pvp-server" />;
}
