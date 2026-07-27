import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-europe');
}

export default function NoxiousotPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-europe" />;
}
