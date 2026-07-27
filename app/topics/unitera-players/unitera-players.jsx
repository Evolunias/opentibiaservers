import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unitera-players');
}

export default function UniteraPlayersKeywordPage() {
  return <StaticKeywordPage slug="unitera-players" />;
}
