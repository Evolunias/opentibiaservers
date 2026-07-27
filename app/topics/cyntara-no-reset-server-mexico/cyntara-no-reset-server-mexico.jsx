import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-mexico');
}

export default function CyntaraNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-mexico" />;
}
