import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-no-reset-server');
}

export default function Oxygenot81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-no-reset-server" />;
}
