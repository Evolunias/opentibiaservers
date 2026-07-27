import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-high-exp-server');
}

export default function Tibianus15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-high-exp-server" />;
}
