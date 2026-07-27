import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-non-pvp-server');
}

export default function Noxiousot14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-non-pvp-server" />;
}
