import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-98-high-exp-server');
}

export default function Tibiantis1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-98-high-exp-server" />;
}
