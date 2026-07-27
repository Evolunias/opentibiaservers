import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-wiki');
}

export default function Tibia12WithScreenshotsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-wiki" />;
}
