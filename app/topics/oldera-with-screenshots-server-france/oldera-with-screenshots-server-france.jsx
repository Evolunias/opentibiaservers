import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-france');
}

export default function OlderaWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-france" />;
}
