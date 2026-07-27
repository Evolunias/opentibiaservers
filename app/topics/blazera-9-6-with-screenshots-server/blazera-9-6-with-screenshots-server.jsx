import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-with-screenshots-server');
}

export default function Blazera96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-with-screenshots-server" />;
}
