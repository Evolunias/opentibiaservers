import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-no-reset-server');
}

export default function Empirebr15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-no-reset-server" />;
}
