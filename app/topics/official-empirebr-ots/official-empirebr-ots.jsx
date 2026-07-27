import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-ots');
}

export default function OfficialEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-ots" />;
}
