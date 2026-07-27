import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-germany');
}

export default function MidhemWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-germany" />;
}
