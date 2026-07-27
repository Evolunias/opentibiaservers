import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-no-reset-server');
}

export default function Oxygenot15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-no-reset-server" />;
}
