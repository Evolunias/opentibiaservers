import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-72-low-exp-server');
}

export default function Tibiantis772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-72-low-exp-server" />;
}
