import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-low-exp-server');
}

export default function Alastera13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-low-exp-server" />;
}
