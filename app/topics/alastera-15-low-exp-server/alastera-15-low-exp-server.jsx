import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-low-exp-server');
}

export default function Alastera15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-low-exp-server" />;
}
