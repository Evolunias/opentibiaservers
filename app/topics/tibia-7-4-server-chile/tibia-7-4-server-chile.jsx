import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-chile');
}

export default function Tibia74ServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-chile" />;
}
