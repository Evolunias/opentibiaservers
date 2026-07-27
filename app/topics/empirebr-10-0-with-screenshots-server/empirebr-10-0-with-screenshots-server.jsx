import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-with-screenshots-server');
}

export default function Empirebr100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-with-screenshots-server" />;
}
