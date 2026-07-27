import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-high-exp-server');
}

export default function Kasteria86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-high-exp-server" />;
}
