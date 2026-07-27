import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-low-exp-server');
}

export default function Tibiantis96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-low-exp-server" />;
}
