import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-europe');
}

export default function EvoleraWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-europe" />;
}
