import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-screenshots-server-mexico');
}

export default function AlasteraWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-screenshots-server-mexico" />;
}
