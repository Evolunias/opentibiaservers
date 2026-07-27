import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-usa');
}

export default function NoxiousotNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-usa" />;
}
