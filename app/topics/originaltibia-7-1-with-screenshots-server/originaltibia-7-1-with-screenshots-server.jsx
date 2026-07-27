import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-1-with-screenshots-server');
}

export default function Originaltibia71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-1-with-screenshots-server" />;
}
