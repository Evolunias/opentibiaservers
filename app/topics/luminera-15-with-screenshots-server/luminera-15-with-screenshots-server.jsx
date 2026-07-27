import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-with-screenshots-server');
}

export default function Luminera15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-with-screenshots-server" />;
}
