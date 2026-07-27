import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-15-with-screenshots-server');
}

export default function Archlight15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-15-with-screenshots-server" />;
}
