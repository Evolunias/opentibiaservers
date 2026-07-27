import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-low-exp-server-brazil');
}

export default function InfernalOtLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-low-exp-server-brazil" />;
}
