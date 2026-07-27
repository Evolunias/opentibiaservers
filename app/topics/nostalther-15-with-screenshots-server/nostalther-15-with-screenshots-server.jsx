import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-with-screenshots-server');
}

export default function Nostalther15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-with-screenshots-server" />;
}
