import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-ot');
}

export default function NoResetEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-ot" />;
}
