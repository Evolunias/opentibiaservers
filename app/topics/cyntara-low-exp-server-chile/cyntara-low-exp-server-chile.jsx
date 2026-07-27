import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-chile');
}

export default function CyntaraLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-chile" />;
}
