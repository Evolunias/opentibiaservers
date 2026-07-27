import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-no-reset-server');
}

export default function Evolera84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-no-reset-server" />;
}
