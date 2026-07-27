import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-ots');
}

export default function ActiveEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-ots" />;
}
