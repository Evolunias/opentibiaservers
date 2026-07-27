import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-wars');
}

export default function EmpirebrWarsKeywordPage() {
  return <StaticKeywordPage slug="empirebr-wars" />;
}
