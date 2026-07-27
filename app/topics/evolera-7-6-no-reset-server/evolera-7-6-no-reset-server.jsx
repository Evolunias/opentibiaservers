import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-no-reset-server');
}

export default function Evolera76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-no-reset-server" />;
}
