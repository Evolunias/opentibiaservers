import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-poland');
}

export default function ArchlightWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-poland" />;
}
