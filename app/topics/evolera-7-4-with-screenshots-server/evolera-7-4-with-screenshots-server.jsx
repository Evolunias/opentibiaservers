import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-with-screenshots-server');
}

export default function Evolera74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-with-screenshots-server" />;
}
