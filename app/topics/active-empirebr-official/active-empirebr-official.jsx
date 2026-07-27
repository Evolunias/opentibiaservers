import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-official');
}

export default function ActiveEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-official" />;
}
