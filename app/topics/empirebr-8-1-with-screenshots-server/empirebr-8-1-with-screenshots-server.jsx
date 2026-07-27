import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-with-screenshots-server');
}

export default function Empirebr81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-with-screenshots-server" />;
}
