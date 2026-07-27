import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-germany');
}

export default function CyntaraBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-germany" />;
}
