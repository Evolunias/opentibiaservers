import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-with-screenshots-server');
}

export default function Imperianic13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-with-screenshots-server" />;
}
