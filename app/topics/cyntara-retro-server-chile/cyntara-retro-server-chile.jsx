import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-chile');
}

export default function CyntaraRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-chile" />;
}
