import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-with-screenshots-server');
}

export default function Originaltibia15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-with-screenshots-server" />;
}
