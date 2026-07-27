import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-europe');
}

export default function LumineraWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-europe" />;
}
