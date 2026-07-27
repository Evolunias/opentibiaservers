import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-with-screenshots-server');
}

export default function Oxygenot14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-with-screenshots-server" />;
}
