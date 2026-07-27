import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-high-exp-server');
}

export default function Kasteria12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-high-exp-server" />;
}
