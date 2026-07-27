import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-chile');
}

export default function RealestaFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-chile" />;
}
