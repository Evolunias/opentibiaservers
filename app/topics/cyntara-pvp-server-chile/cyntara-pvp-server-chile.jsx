import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-chile');
}

export default function CyntaraPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-chile" />;
}
