import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-north-america');
}

export default function CyntaraBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-north-america" />;
}
