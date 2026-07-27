import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-with-screenshots-server');
}

export default function Cyntara14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-with-screenshots-server" />;
}
