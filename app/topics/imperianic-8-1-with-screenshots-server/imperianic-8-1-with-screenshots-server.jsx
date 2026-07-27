import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-1-with-screenshots-server');
}

export default function Imperianic81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-1-with-screenshots-server" />;
}
