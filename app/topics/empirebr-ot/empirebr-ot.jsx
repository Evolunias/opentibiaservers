import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-ot');
}

export default function EmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="empirebr-ot" />;
}
