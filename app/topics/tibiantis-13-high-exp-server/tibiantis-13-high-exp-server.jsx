import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-high-exp-server');
}

export default function Tibiantis13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-high-exp-server" />;
}
