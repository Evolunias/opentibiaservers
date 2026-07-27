import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-98-high-exp-server');
}

export default function Kasteria1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-98-high-exp-server" />;
}
