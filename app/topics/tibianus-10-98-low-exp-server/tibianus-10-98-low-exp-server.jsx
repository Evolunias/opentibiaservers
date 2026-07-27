import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-low-exp-server');
}

export default function Tibianus1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-low-exp-server" />;
}
