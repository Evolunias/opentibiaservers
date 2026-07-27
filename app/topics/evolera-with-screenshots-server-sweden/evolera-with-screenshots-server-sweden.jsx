import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-sweden');
}

export default function EvoleraWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-sweden" />;
}
