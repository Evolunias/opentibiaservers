import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-screenshots-server-europe');
}

export default function AlasteraWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-screenshots-server-europe" />;
}
