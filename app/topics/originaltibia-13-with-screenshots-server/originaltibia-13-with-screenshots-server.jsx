import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-with-screenshots-server');
}

export default function Originaltibia13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-with-screenshots-server" />;
}
