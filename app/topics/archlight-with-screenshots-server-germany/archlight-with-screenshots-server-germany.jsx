import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-germany');
}

export default function ArchlightWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-germany" />;
}
