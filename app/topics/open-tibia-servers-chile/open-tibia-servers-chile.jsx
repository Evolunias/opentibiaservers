import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-chile');
}

export default function OpenTibiaServersChileKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-chile" />;
}
