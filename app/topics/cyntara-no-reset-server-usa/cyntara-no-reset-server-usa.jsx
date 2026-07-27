import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-usa');
}

export default function CyntaraNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-usa" />;
}
