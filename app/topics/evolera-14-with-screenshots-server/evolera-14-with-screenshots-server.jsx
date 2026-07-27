import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-with-screenshots-server');
}

export default function Evolera14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-with-screenshots-server" />;
}
