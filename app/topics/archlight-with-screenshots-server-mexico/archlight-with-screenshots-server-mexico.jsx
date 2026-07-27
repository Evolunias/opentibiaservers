import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-mexico');
}

export default function ArchlightWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-mexico" />;
}
