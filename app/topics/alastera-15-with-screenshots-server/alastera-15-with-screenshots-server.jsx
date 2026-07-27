import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-with-screenshots-server');
}

export default function Alastera15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-with-screenshots-server" />;
}
