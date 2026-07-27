import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-screenshots-server-chile');
}

export default function EvoluniaWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-screenshots-server-chile" />;
}
