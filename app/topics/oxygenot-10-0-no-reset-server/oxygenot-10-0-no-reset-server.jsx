import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-no-reset-server');
}

export default function Oxygenot100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-no-reset-server" />;
}
