import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-high-exp-server');
}

export default function Tibiantis11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-high-exp-server" />;
}
