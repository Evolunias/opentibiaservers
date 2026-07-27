import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-chile');
}

export default function RealeraFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-chile" />;
}
