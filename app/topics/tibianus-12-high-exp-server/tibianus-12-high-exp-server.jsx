import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-high-exp-server');
}

export default function Tibianus12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-high-exp-server" />;
}
