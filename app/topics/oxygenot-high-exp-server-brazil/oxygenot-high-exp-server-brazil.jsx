import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-brazil');
}

export default function OxygenotHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-brazil" />;
}
