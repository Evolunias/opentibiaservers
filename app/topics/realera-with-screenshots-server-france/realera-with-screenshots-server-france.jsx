import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-france');
}

export default function RealeraWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-france" />;
}
