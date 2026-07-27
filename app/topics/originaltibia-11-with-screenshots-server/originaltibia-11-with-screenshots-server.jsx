import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-with-screenshots-server');
}

export default function Originaltibia11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-with-screenshots-server" />;
}
