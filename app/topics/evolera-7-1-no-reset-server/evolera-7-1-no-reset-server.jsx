import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-no-reset-server');
}

export default function Evolera71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-no-reset-server" />;
}
