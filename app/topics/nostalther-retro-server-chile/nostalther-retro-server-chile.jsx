import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-chile');
}

export default function NostaltherRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-chile" />;
}
