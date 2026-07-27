import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-with-screenshots-server');
}

export default function Blazera76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-with-screenshots-server" />;
}
