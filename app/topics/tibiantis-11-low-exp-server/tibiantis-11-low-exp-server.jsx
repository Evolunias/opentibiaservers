import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-low-exp-server');
}

export default function Tibiantis11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-low-exp-server" />;
}
