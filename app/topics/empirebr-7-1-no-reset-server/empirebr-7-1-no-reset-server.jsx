import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-no-reset-server');
}

export default function Empirebr71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-no-reset-server" />;
}
