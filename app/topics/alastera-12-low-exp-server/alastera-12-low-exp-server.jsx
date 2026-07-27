import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-low-exp-server');
}

export default function Alastera12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-low-exp-server" />;
}
