import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-72-high-exp-server');
}

export default function Tibiantis772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-72-high-exp-server" />;
}
