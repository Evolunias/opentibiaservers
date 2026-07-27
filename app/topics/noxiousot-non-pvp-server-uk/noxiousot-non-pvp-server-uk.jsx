import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-uk');
}

export default function NoxiousotNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-uk" />;
}
