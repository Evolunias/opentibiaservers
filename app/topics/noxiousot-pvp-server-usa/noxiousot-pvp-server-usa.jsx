import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-usa');
}

export default function NoxiousotPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-usa" />;
}
