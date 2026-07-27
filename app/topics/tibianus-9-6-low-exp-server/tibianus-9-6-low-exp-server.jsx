import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-low-exp-server');
}

export default function Tibianus96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-low-exp-server" />;
}
