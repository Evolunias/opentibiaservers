import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-with-screenshots-server');
}

export default function Imperianic12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-with-screenshots-server" />;
}
