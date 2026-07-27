import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-6-with-screenshots-server');
}

export default function Serenity76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-6-with-screenshots-server" />;
}
