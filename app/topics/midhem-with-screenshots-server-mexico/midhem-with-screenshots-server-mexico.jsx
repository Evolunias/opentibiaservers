import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-mexico');
}

export default function MidhemWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-mexico" />;
}
