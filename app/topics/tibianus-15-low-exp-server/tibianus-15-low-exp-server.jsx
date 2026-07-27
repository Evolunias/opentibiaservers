import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-low-exp-server');
}

export default function Tibianus15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-low-exp-server" />;
}
