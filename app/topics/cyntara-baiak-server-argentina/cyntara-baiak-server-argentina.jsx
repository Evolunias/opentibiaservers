import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-argentina');
}

export default function CyntaraBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-argentina" />;
}
