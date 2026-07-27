import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-chile');
}

export default function CyntaraHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-chile" />;
}
