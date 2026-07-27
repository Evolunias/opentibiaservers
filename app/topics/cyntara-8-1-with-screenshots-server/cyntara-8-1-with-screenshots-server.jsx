import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-with-screenshots-server');
}

export default function Cyntara81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-with-screenshots-server" />;
}
