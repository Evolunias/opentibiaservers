import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-with-screenshots-server');
}

export default function Alastera71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-with-screenshots-server" />;
}
