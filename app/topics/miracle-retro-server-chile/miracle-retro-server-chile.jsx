import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-chile');
}

export default function MiracleRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-chile" />;
}
