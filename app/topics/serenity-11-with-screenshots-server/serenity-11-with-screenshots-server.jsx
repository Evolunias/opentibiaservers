import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-11-with-screenshots-server');
}

export default function Serenity11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-11-with-screenshots-server" />;
}
