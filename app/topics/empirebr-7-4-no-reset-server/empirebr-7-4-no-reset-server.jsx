import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-no-reset-server');
}

export default function Empirebr74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-no-reset-server" />;
}
