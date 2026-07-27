import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-no-reset-server-chile');
}

export default function CyntaraNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-no-reset-server-chile" />;
}
