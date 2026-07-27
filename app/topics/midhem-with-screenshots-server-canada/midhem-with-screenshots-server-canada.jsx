import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-canada');
}

export default function MidhemWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-canada" />;
}
