import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-reset');
}

export default function EmpirebrResetKeywordPage() {
  return <StaticKeywordPage slug="empirebr-reset" />;
}
