import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-with-screenshots-server');
}

export default function Cyntara12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-with-screenshots-server" />;
}
