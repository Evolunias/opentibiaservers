import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-screenshots-server-france');
}

export default function ArchlightWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-screenshots-server-france" />;
}
