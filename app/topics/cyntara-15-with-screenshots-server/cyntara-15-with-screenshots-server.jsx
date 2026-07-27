import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-with-screenshots-server');
}

export default function Cyntara15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-with-screenshots-server" />;
}
