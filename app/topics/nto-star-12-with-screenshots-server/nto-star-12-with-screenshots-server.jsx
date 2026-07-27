import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-with-screenshots-server');
}

export default function NtoStar12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-with-screenshots-server" />;
}
