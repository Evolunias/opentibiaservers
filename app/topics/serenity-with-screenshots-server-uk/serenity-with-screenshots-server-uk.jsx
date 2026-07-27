import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-screenshots-server-uk');
}

export default function SerenityWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-screenshots-server-uk" />;
}
