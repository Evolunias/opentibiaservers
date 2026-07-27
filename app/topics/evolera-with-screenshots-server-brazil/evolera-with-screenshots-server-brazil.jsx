import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-brazil');
}

export default function EvoleraWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-brazil" />;
}
