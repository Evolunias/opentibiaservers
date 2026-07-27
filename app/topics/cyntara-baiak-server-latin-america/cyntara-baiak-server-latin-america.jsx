import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-latin-america');
}

export default function CyntaraBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-latin-america" />;
}
