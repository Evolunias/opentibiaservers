import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-72-with-screenshots-server');
}

export default function Serenity772WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-72-with-screenshots-server" />;
}
