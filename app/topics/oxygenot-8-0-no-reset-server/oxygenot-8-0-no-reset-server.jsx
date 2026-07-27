import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-no-reset-server');
}

export default function Oxygenot80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-no-reset-server" />;
}
