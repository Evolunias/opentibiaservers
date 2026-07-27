import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-with-screenshots-server');
}

export default function Cyntara100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-with-screenshots-server" />;
}
