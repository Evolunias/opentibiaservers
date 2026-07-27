import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-screenshots-server-brazil');
}

export default function SerenityWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-screenshots-server-brazil" />;
}
