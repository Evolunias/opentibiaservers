import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-usa');
}

export default function MidhemWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-usa" />;
}
