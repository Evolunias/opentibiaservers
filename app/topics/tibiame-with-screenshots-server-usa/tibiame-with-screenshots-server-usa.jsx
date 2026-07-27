import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-usa');
}

export default function TibiameWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-usa" />;
}
