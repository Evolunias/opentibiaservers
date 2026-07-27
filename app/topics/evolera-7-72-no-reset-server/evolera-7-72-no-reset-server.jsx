import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-72-no-reset-server');
}

export default function Evolera772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-72-no-reset-server" />;
}
