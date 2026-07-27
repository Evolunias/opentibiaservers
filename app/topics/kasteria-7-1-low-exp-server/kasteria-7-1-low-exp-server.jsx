import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-low-exp-server');
}

export default function Kasteria71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-low-exp-server" />;
}
