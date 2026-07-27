import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-europe');
}

export default function MidhemWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-europe" />;
}
