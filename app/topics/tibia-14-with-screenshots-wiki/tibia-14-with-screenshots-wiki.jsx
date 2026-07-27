import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-screenshots-wiki');
}

export default function Tibia14WithScreenshotsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-screenshots-wiki" />;
}
