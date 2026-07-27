import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-with-screenshots-server');
}

export default function Imperianic100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-with-screenshots-server" />;
}
