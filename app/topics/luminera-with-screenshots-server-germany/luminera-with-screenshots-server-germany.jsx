import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-germany');
}

export default function LumineraWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-germany" />;
}
