import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-no-reset-server');
}

export default function Evolera13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-no-reset-server" />;
}
