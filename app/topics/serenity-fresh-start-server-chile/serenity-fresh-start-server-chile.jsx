import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-fresh-start-server-chile');
}

export default function SerenityFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-fresh-start-server-chile" />;
}
