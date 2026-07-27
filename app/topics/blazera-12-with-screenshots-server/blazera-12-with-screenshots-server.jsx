import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-with-screenshots-server');
}

export default function Blazera12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-with-screenshots-server" />;
}
