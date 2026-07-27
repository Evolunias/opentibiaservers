import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-high-exp-server');
}

export default function Tibiantis76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-high-exp-server" />;
}
