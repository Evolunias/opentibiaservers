import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-screenshots-server-sweden');
}

export default function DuraOnlineWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-screenshots-server-sweden" />;
}
