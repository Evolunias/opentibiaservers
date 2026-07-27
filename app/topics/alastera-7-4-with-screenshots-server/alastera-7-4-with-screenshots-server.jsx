import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-with-screenshots-server');
}

export default function Alastera74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-with-screenshots-server" />;
}
