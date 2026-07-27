import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-sweden');
}

export default function ArchlightWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-sweden" />;
}
