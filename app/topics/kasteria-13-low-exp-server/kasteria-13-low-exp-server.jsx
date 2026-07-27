import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-low-exp-server');
}

export default function Kasteria13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-low-exp-server" />;
}
