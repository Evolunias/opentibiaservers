import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-guide');
}

export default function OfficialEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-guide" />;
}
