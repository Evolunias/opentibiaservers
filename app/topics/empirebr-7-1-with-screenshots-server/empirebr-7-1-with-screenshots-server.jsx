import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-with-screenshots-server');
}

export default function Empirebr71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-with-screenshots-server" />;
}
