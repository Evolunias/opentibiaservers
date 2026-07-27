import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-chile');
}

export default function HighExpServersChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-chile" />;
}
