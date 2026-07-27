import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-with-screenshots-server');
}

export default function Originaltibia81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-with-screenshots-server" />;
}
