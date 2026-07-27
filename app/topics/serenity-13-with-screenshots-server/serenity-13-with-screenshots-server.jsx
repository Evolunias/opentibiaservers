import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-with-screenshots-server');
}

export default function Serenity13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-with-screenshots-server" />;
}
