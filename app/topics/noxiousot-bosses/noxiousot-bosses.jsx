import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-bosses');
}

export default function NoxiousotBossesKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-bosses" />;
}
