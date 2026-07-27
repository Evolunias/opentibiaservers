import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-screenshots-server-argentina');
}

export default function SerenityWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-screenshots-server-argentina" />;
}
