import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-screenshots-server-usa');
}

export default function SerenityWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-screenshots-server-usa" />;
}
