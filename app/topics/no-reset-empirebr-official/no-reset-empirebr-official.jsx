import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-official');
}

export default function NoResetEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-official" />;
}
