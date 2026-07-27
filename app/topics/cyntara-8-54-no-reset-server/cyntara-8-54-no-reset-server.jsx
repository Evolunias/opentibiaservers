import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-54-no-reset-server');
}

export default function Cyntara854NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-54-no-reset-server" />;
}
