import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-low-exp-server');
}

export default function Tibianus11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-low-exp-server" />;
}
