import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-germany');
}

export default function EvoleraWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-germany" />;
}
