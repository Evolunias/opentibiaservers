import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-15-with-screenshots-server');
}

export default function Serenity15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-15-with-screenshots-server" />;
}
