import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-chile');
}

export default function CyntaraFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-chile" />;
}
