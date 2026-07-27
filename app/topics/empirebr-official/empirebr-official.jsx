import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-official');
}

export default function EmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="empirebr-official" />;
}
