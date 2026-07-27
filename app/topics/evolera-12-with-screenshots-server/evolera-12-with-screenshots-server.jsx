import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-with-screenshots-server');
}

export default function Evolera12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-with-screenshots-server" />;
}
