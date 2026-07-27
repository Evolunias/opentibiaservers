import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-no-reset-server');
}

export default function Oxygenot13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-no-reset-server" />;
}
