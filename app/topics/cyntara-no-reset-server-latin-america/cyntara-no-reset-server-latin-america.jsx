import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-latin-america');
}

export default function CyntaraNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-latin-america" />;
}
