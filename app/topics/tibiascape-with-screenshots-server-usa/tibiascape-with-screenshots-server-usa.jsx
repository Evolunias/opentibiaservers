import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-usa');
}

export default function TibiascapeWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-usa" />;
}
