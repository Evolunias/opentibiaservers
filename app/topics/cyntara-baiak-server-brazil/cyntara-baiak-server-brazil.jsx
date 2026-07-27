import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-brazil');
}

export default function CyntaraBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-brazil" />;
}
