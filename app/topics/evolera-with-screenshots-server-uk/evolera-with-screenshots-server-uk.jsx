import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-uk');
}

export default function EvoleraWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-uk" />;
}
