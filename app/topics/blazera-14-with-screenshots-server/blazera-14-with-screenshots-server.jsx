import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-with-screenshots-server');
}

export default function Blazera14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-with-screenshots-server" />;
}
