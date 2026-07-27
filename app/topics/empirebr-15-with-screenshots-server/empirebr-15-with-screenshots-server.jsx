import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-with-screenshots-server');
}

export default function Empirebr15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-with-screenshots-server" />;
}
