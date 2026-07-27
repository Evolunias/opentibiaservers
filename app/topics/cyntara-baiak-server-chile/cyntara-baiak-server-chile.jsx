import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-baiak-server-chile');
}

export default function CyntaraBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-baiak-server-chile" />;
}
