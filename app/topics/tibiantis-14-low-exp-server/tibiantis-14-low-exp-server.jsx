import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-low-exp-server');
}

export default function Tibiantis14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-low-exp-server" />;
}
