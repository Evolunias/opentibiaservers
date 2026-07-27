import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-4-with-screenshots-server');
}

export default function Cyntara74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-4-with-screenshots-server" />;
}
