import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-screenshots-wiki');
}

export default function Tibia100WithScreenshotsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-screenshots-wiki" />;
}
