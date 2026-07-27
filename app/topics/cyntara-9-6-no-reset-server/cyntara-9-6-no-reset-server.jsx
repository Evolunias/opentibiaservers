import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-no-reset-server');
}

export default function Cyntara96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-no-reset-server" />;
}
