import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-open-tibia-server-chile');
}

export default function FreshStartOpenTibiaServerChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-open-tibia-server-chile" />;
}
