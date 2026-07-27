import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-chile');
}

export default function FreshStartServersChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-chile" />;
}
