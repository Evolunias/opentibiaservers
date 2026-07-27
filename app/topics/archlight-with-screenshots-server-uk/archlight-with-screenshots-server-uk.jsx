import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-uk');
}

export default function ArchlightWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-uk" />;
}
