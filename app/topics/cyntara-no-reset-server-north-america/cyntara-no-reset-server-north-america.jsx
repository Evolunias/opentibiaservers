import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-north-america');
}

export default function CyntaraNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-north-america" />;
}
