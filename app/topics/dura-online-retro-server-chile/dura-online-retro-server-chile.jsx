import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-chile');
}

export default function DuraOnlineRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-chile" />;
}
