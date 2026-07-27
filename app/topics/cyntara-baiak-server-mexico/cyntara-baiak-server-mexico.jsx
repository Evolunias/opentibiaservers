import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-mexico');
}

export default function CyntaraBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-mexico" />;
}
