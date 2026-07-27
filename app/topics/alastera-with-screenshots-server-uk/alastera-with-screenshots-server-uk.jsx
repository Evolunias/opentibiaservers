import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-screenshots-server-uk');
}

export default function AlasteraWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-screenshots-server-uk" />;
}
