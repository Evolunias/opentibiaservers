import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-screenshots-server-germany');
}

export default function DuraOnlineWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-screenshots-server-germany" />;
}
