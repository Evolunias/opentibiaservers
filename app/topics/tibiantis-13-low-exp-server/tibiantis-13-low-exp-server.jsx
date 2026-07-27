import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-low-exp-server');
}

export default function Tibiantis13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-low-exp-server" />;
}
