import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-with-screenshots-server');
}

export default function Empirebr13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-with-screenshots-server" />;
}
