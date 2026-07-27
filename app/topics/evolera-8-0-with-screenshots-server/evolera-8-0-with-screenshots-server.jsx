import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-0-with-screenshots-server');
}

export default function Evolera80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-0-with-screenshots-server" />;
}
