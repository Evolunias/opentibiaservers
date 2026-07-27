import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-latin-america');
}

export default function ArchlightWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-latin-america" />;
}
