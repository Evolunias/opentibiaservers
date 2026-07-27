import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-low-exp-server');
}

export default function Tibiantis71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-low-exp-server" />;
}
