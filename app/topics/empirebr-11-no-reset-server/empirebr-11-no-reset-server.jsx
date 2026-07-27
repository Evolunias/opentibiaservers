import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-no-reset-server');
}

export default function Empirebr11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-no-reset-server" />;
}
