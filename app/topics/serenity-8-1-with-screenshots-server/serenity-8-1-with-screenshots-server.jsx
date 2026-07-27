import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-with-screenshots-server');
}

export default function Serenity81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-with-screenshots-server" />;
}
