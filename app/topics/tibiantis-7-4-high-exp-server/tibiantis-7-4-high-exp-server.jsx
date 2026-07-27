import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-high-exp-server');
}

export default function Tibiantis74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-high-exp-server" />;
}
