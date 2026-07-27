import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-usa');
}

export default function CyntaraBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-usa" />;
}
