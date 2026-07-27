import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-1-high-exp-server');
}

export default function Tibianus71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-1-high-exp-server" />;
}
