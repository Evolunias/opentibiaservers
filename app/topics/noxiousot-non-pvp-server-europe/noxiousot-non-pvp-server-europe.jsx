import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-europe');
}

export default function NoxiousotNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-europe" />;
}
