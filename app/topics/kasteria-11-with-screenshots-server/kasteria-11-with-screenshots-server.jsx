import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-with-screenshots-server');
}

export default function Kasteria11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-with-screenshots-server" />;
}
