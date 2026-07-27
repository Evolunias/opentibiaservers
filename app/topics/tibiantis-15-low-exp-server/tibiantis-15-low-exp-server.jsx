import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-low-exp-server');
}

export default function Tibiantis15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-low-exp-server" />;
}
