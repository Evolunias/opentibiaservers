import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-mexico');
}

export default function OxygenotHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-mexico" />;
}
