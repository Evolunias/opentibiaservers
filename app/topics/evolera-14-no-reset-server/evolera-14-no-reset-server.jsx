import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-no-reset-server');
}

export default function Evolera14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-no-reset-server" />;
}
