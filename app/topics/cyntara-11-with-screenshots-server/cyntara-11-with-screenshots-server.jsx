import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-with-screenshots-server');
}

export default function Cyntara11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-with-screenshots-server" />;
}
