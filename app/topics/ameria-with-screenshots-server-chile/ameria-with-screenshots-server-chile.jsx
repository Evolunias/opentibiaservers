import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-screenshots-server-chile');
}

export default function AmeriaWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-screenshots-server-chile" />;
}
