import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-with-screenshots-server');
}

export default function Kasteria81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-with-screenshots-server" />;
}
