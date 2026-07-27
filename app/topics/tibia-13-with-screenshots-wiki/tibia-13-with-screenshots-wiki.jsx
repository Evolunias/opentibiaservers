import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-wiki');
}

export default function Tibia13WithScreenshotsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-wiki" />;
}
