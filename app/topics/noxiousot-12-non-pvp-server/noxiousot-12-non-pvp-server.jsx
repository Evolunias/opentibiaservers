import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-non-pvp-server');
}

export default function Noxiousot12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-non-pvp-server" />;
}
