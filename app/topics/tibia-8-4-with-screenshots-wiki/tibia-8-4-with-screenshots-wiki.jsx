import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-screenshots-wiki');
}

export default function Tibia84WithScreenshotsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-screenshots-wiki" />;
}
