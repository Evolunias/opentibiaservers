import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-screenshots-server-north-america');
}

export default function TibiantisWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-screenshots-server-north-america" />;
}
