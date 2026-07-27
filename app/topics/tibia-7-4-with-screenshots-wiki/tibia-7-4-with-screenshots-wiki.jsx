import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-screenshots-wiki');
}

export default function Tibia74WithScreenshotsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-screenshots-wiki" />;
}
