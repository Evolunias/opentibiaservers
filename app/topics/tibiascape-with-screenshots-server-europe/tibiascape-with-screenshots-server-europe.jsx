import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-europe');
}

export default function TibiascapeWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-europe" />;
}
