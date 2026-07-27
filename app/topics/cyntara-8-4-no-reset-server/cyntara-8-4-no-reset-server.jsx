import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-no-reset-server');
}

export default function Cyntara84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-no-reset-server" />;
}
