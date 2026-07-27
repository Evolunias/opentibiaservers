import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-low-exp-server');
}

export default function Alastera81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-low-exp-server" />;
}
