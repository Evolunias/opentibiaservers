import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-6-high-exp-server');
}

export default function Tibianus86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-6-high-exp-server" />;
}
