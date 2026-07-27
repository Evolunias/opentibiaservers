import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-screenshots-server-europe');
}

export default function ShadowcoresWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-screenshots-server-europe" />;
}
