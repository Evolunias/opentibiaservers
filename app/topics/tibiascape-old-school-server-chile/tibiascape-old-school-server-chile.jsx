import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-chile');
}

export default function TibiascapeOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-chile" />;
}
