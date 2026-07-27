import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-with-screenshots-server');
}

export default function Oxygenot11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-with-screenshots-server" />;
}
