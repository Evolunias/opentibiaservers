import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-no-reset-server');
}

export default function Empirebr13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-no-reset-server" />;
}
