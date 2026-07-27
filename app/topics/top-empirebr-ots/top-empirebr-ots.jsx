import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-ots');
}

export default function TopEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-ots" />;
}
