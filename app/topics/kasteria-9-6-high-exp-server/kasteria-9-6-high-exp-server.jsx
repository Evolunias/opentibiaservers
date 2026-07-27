import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-high-exp-server');
}

export default function Kasteria96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-high-exp-server" />;
}
