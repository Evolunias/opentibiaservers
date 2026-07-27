import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-low-exp-server');
}

export default function Alastera1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-low-exp-server" />;
}
