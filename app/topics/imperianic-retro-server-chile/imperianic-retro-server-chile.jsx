import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-chile');
}

export default function ImperianicRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-chile" />;
}
