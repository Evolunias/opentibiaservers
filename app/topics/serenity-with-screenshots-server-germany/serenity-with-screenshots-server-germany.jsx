import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-screenshots-server-germany');
}

export default function SerenityWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-screenshots-server-germany" />;
}
