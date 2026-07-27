import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-no-reset-server');
}

export default function Oxygenot71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-no-reset-server" />;
}
