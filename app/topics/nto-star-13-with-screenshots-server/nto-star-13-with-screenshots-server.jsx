import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-with-screenshots-server');
}

export default function NtoStar13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-with-screenshots-server" />;
}
