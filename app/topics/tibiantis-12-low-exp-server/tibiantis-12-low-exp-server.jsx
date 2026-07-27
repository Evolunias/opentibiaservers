import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-low-exp-server');
}

export default function Tibiantis12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-low-exp-server" />;
}
