import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-6-low-exp-server');
}

export default function Tibianus86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-6-low-exp-server" />;
}
