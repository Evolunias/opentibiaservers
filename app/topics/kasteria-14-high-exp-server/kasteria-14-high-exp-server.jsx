import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-high-exp-server');
}

export default function Kasteria14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-high-exp-server" />;
}
