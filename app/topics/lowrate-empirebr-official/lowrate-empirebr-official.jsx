import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-official');
}

export default function LowrateEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-official" />;
}
