import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-with-screenshots-server');
}

export default function NtoStar15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-with-screenshots-server" />;
}
