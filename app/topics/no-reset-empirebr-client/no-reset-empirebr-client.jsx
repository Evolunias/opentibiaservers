import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-client');
}

export default function NoResetEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-client" />;
}
