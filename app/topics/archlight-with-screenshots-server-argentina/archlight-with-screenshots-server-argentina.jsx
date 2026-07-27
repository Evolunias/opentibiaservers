import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-argentina');
}

export default function ArchlightWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-argentina" />;
}
