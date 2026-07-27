import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-with-screenshots-server');
}

export default function Empirebr86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-with-screenshots-server" />;
}
