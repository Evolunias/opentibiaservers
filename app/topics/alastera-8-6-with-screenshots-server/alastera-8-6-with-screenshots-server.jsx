import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-6-with-screenshots-server');
}

export default function Alastera86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-6-with-screenshots-server" />;
}
