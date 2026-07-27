import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-4-no-reset-server');
}

export default function Oxygenot84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-4-no-reset-server" />;
}
