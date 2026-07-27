import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-argentina');
}

export default function EvoleraWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-argentina" />;
}
