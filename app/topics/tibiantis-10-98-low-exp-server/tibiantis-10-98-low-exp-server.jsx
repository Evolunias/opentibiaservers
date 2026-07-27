import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-98-low-exp-server');
}

export default function Tibiantis1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-98-low-exp-server" />;
}
