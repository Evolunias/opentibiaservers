import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-argentina');
}

export default function TibiascapeWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-argentina" />;
}
