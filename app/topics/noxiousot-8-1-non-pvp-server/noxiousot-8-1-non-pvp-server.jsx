import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-1-non-pvp-server');
}

export default function Noxiousot81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-1-non-pvp-server" />;
}
