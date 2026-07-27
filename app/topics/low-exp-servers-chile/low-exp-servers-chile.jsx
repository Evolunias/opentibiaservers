import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-chile');
}

export default function LowExpServersChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-chile" />;
}
