import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-canada');
}

export default function CyntaraNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-canada" />;
}
