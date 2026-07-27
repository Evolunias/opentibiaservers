import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-with-screenshots-server');
}

export default function Cyntara13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-with-screenshots-server" />;
}
