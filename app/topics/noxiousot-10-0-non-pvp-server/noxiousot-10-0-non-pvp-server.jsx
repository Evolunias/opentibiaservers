import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-non-pvp-server');
}

export default function Noxiousot100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-non-pvp-server" />;
}
