import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-screenshots-server-chile');
}

export default function CyntaraWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-screenshots-server-chile" />;
}
