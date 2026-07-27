import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-non-pvp-server');
}

export default function Noxiousot15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-non-pvp-server" />;
}
