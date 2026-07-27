import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-no-reset-server');
}

export default function Oxygenot96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-no-reset-server" />;
}
