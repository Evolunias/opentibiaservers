import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-brazil');
}

export default function LowExpOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-brazil" />;
}
