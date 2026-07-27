import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-screenshots-wiki');
}

export default function Tibia80WithScreenshotsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-screenshots-wiki" />;
}
