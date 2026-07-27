import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-with-screenshots-server');
}

export default function Blazera11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-with-screenshots-server" />;
}
