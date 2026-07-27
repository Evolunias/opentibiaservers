import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-with-screenshots-server');
}

export default function Saintsot12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-with-screenshots-server" />;
}
