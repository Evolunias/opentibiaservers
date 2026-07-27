import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-usa');
}

export default function RealeraWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-usa" />;
}
