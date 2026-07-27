import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-germany');
}

export default function TibianusWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-germany" />;
}
