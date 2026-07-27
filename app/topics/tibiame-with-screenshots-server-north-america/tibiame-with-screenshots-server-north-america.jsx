import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-north-america');
}

export default function TibiameWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-north-america" />;
}
