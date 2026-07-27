import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-with-screenshots-server');
}

export default function Archlight12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-with-screenshots-server" />;
}
