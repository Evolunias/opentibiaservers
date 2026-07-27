import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-argentina');
}

export default function CyntaraNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-argentina" />;
}
