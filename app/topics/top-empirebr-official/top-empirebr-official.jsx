import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-official');
}

export default function TopEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-official" />;
}
