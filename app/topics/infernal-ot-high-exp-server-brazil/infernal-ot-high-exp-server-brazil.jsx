import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-high-exp-server-brazil');
}

export default function InfernalOtHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-high-exp-server-brazil" />;
}
