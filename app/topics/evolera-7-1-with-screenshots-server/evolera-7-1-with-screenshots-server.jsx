import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-with-screenshots-server');
}

export default function Evolera71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-with-screenshots-server" />;
}
