import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-screenshots-server-france');
}

export default function OriginaltibiaWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-screenshots-server-france" />;
}
