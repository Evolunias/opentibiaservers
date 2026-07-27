import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-fresh-start-server-chile');
}

export default function SabrehavenFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-fresh-start-server-chile" />;
}
