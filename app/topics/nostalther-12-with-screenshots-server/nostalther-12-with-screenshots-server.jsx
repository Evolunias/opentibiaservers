import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-with-screenshots-server');
}

export default function Nostalther12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-with-screenshots-server" />;
}
