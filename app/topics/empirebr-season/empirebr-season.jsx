import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-season');
}

export default function EmpirebrSeasonKeywordPage() {
  return <StaticKeywordPage slug="empirebr-season" />;
}
