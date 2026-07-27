import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-high-exp-server');
}

export default function Tibianus84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-high-exp-server" />;
}
