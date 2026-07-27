import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-high-exp-server');
}

export default function Kasteria80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-high-exp-server" />;
}
