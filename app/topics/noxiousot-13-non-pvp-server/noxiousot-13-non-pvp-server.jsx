import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-non-pvp-server');
}

export default function Noxiousot13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-non-pvp-server" />;
}
