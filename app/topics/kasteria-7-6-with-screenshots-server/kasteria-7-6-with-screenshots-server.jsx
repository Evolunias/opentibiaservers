import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-6-with-screenshots-server');
}

export default function Kasteria76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-6-with-screenshots-server" />;
}
