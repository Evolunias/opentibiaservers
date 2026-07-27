import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-france');
}

export default function ElderaWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-france" />;
}
