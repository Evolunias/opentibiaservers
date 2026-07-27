import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-with-screenshots-server');
}

export default function Archlight81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-with-screenshots-server" />;
}
