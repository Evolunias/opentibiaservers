import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-with-screenshots-server');
}

export default function Oxygenot12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-with-screenshots-server" />;
}
