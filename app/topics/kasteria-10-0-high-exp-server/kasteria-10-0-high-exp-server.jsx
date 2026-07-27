import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-high-exp-server');
}

export default function Kasteria100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-high-exp-server" />;
}
