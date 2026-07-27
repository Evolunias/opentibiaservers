import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-bosses');
}

export default function ArcaniarlBossesKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-bosses" />;
}
