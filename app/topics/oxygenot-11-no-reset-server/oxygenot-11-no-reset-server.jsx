import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-no-reset-server');
}

export default function Oxygenot11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-no-reset-server" />;
}
