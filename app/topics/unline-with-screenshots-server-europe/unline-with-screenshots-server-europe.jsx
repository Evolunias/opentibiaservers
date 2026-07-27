import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-screenshots-server-europe');
}

export default function UnlineWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-with-screenshots-server-europe" />;
}
