import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-no-reset-server');
}

export default function Oxygenot14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-no-reset-server" />;
}
