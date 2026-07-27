import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-with-screenshots-server');
}

export default function Alastera12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-with-screenshots-server" />;
}
