import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-4-with-screenshots-server');
}

export default function Archlight84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-4-with-screenshots-server" />;
}
