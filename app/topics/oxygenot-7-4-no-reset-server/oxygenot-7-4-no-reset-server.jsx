import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-no-reset-server');
}

export default function Oxygenot74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-no-reset-server" />;
}
