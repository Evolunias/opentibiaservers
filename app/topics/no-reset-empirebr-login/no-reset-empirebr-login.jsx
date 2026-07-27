import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-login');
}

export default function NoResetEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-login" />;
}
