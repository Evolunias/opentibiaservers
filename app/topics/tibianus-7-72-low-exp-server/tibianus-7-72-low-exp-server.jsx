import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-low-exp-server');
}

export default function Tibianus772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-low-exp-server" />;
}
