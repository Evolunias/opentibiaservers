import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-screenshots-server-chile');
}

export default function CarlinotWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-screenshots-server-chile" />;
}
