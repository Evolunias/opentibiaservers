import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-with-screenshots-server');
}

export default function Originaltibia14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-with-screenshots-server" />;
}
