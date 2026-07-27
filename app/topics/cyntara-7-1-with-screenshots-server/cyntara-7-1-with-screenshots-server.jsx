import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-with-screenshots-server');
}

export default function Cyntara71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-with-screenshots-server" />;
}
