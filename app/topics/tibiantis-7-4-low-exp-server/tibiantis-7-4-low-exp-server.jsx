import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-low-exp-server');
}

export default function Tibiantis74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-low-exp-server" />;
}
