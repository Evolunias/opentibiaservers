import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-screenshots-server-france');
}

export default function SerenityWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-screenshots-server-france" />;
}
