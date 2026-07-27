import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-with-screenshots-server');
}

export default function NtoStar14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-with-screenshots-server" />;
}
