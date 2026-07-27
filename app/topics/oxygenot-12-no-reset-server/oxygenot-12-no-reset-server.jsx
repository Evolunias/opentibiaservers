import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-no-reset-server');
}

export default function Oxygenot12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-no-reset-server" />;
}
