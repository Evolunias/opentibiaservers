import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-low-exp-server');
}

export default function Tibiantis100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-low-exp-server" />;
}
