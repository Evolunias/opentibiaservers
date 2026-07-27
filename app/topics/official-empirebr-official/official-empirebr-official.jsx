import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-official');
}

export default function OfficialEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-official" />;
}
