import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-6-low-exp-server');
}

export default function Tibianus76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-6-low-exp-server" />;
}
