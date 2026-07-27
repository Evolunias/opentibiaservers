import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-with-screenshots-server');
}

export default function Blazera84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-with-screenshots-server" />;
}
