import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-low-exp-server-brazil');
}

export default function OxygenotLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-low-exp-server-brazil" />;
}
