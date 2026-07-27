import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-north-america');
}

export default function ArchlightWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-north-america" />;
}
