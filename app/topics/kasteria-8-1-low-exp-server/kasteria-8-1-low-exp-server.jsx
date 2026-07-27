import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-low-exp-server');
}

export default function Kasteria81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-low-exp-server" />;
}
