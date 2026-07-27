import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-screenshots-server-north-america');
}

export default function SerenityWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-screenshots-server-north-america" />;
}
