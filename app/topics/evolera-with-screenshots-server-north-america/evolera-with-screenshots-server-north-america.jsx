import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-north-america');
}

export default function EvoleraWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-north-america" />;
}
