import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-retro-server-chile');
}

export default function TibiaoriginsRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-retro-server-chile" />;
}
