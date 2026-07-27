import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-europe');
}

export default function RealeraWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-europe" />;
}
