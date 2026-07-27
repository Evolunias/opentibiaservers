import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-12-with-screenshots-server');
}

export default function Serenity12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-12-with-screenshots-server" />;
}
