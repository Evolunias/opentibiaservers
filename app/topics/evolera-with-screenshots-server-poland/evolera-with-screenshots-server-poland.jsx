import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-poland');
}

export default function EvoleraWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-poland" />;
}
