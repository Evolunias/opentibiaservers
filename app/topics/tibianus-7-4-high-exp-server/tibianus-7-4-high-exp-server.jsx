import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-high-exp-server');
}

export default function Tibianus74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-high-exp-server" />;
}
