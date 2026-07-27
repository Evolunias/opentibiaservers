import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-72-low-exp-server');
}

export default function Kasteria772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-72-low-exp-server" />;
}
