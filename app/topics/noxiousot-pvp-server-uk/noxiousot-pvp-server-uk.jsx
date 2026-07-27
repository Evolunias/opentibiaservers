import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-uk');
}

export default function NoxiousotPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-uk" />;
}
