import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-usa');
}

export default function LumineraWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-usa" />;
}
