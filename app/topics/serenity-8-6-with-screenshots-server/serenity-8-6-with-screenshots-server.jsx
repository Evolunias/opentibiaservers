import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-6-with-screenshots-server');
}

export default function Serenity86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-6-with-screenshots-server" />;
}
