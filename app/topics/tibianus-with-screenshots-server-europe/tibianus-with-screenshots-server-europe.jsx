import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-europe');
}

export default function TibianusWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-europe" />;
}
