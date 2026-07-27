import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-high-exp-server');
}

export default function Kasteria11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-high-exp-server" />;
}
