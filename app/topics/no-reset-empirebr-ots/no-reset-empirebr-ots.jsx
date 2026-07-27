import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-ots');
}

export default function NoResetEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-ots" />;
}
