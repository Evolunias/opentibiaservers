import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-1-low-exp-server');
}

export default function Tibiantis81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-1-low-exp-server" />;
}
