import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-europe');
}

export default function ArchlightWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-europe" />;
}
