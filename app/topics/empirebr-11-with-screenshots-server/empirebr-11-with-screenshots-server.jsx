import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-with-screenshots-server');
}

export default function Empirebr11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-with-screenshots-server" />;
}
