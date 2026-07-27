import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-poland');
}

export default function CyntaraBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-poland" />;
}
