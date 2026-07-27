import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-high-exp-server');
}

export default function Tibiantis14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-high-exp-server" />;
}
