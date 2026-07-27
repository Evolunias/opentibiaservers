import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-high-exp-server');
}

export default function Tibianus96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-high-exp-server" />;
}
