import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-with-screenshots-server');
}

export default function Originaltibia12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-with-screenshots-server" />;
}
