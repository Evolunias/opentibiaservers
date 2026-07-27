import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-screenshots-server-latin-america');
}

export default function SerenityWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-screenshots-server-latin-america" />;
}
