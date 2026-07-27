import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-with-screenshots-server');
}

export default function Alastera13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-with-screenshots-server" />;
}
