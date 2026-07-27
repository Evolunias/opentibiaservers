import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-with-screenshots-server');
}

export default function Blazera13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-with-screenshots-server" />;
}
