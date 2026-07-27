import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-evo-server-chile');
}

export default function CyntaraEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-evo-server-chile" />;
}
