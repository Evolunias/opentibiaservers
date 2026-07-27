import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-screenshots-server-chile');
}

export default function SabrehavenWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-screenshots-server-chile" />;
}
