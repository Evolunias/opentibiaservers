import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-4-with-screenshots-server');
}

export default function Kasteria74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-4-with-screenshots-server" />;
}
