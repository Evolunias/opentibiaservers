import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp');
}

export default function NoxiousotPvpKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp" />;
}
