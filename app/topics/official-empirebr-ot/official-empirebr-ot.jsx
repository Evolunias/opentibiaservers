import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-ot');
}

export default function OfficialEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-ot" />;
}
