import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-low-exp-server');
}

export default function Kasteria12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-low-exp-server" />;
}
