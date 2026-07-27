import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-germany');
}

export default function TibiascapeWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-germany" />;
}
