import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-with-screenshots-server');
}

export default function Cyntara84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-with-screenshots-server" />;
}
