import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-low-exp-server');
}

export default function Kasteria96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-low-exp-server" />;
}
