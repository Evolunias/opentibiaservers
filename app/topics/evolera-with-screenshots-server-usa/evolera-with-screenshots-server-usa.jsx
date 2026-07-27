import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-usa');
}

export default function EvoleraWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-usa" />;
}
