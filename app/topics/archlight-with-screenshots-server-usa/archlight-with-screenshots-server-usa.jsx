import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-usa');
}

export default function ArchlightWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-usa" />;
}
