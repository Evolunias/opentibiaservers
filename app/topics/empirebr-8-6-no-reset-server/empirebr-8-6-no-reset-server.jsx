import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-no-reset-server');
}

export default function Empirebr86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-no-reset-server" />;
}
