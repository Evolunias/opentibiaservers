import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-high-exp-server');
}

export default function Tibianus13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-high-exp-server" />;
}
