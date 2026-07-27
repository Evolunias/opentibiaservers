import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-high-exp-server');
}

export default function Kasteria13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-high-exp-server" />;
}
