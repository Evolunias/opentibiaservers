import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-with-screenshots-server');
}

export default function Originaltibia100WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-with-screenshots-server" />;
}
