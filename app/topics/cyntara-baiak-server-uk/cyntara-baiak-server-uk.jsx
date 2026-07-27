import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-uk');
}

export default function CyntaraBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-uk" />;
}
