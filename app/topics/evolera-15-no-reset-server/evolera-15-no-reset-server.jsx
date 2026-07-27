import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-no-reset-server');
}

export default function Evolera15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-no-reset-server" />;
}
