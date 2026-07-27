import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-screenshots');
}

export default function EvoleraScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="evolera-screenshots" />;
}
