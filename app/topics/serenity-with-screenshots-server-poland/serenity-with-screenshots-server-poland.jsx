import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-screenshots-server-poland');
}

export default function SerenityWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-screenshots-server-poland" />;
}
