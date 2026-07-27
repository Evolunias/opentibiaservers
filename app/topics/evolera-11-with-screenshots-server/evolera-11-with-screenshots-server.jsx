import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-with-screenshots-server');
}

export default function Evolera11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-with-screenshots-server" />;
}
