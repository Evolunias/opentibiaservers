import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-screenshots-server-latin-america');
}

export default function ShadowcoresWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-screenshots-server-latin-america" />;
}
