import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-screenshots');
}

export default function SerenityScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="serenity-screenshots" />;
}
