import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-brazil');
}

export default function ArchlightWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-brazil" />;
}
