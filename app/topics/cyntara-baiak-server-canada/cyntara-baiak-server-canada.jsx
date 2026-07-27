import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-canada');
}

export default function CyntaraBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-canada" />;
}
