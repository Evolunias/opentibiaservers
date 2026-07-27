import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-wiki');
}

export default function Tibia11WithScreenshotsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-wiki" />;
}
