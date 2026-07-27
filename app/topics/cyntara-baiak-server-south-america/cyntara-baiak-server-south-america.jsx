import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-south-america');
}

export default function CyntaraBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-south-america" />;
}
