import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-high-exp-server');
}

export default function Tibianus11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-high-exp-server" />;
}
