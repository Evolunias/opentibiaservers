import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-chile');
}

export default function SabrehavenRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-chile" />;
}
