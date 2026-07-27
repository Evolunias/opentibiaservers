import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-high-exp-server');
}

export default function Kasteria71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-high-exp-server" />;
}
