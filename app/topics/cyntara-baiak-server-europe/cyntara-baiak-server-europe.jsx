import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-europe');
}

export default function CyntaraBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-europe" />;
}
