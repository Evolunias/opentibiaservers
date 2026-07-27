import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-screenshots-server-north-america');
}

export default function AlasteraWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-screenshots-server-north-america" />;
}
