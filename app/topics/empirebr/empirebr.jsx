import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr');
}

export default function EmpirebrKeywordPage() {
  return <StaticKeywordPage slug="empirebr" />;
}
