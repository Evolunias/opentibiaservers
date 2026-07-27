import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-with-screenshots-server');
}

export default function Kasteria100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-with-screenshots-server" />;
}
