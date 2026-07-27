import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-high-exp-server');
}

export default function BestTibiaHighExpServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-high-exp-server" />;
}
