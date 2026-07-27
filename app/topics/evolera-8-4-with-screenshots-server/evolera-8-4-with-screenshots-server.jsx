import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-with-screenshots-server');
}

export default function Evolera84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-with-screenshots-server" />;
}
