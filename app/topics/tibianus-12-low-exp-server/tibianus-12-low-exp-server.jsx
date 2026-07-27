import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-low-exp-server');
}

export default function Tibianus12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-low-exp-server" />;
}
