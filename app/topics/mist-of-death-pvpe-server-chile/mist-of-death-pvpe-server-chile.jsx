import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-chile');
}

export default function MistOfDeathPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-chile" />;
}
