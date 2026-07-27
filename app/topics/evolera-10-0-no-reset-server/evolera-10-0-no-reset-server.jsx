import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-no-reset-server');
}

export default function Evolera100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-no-reset-server" />;
}
