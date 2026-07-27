import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-bosses');
}

export default function NtoStarBossesKeywordPage() {
  return <StaticKeywordPage slug="nto-star-bosses" />;
}
