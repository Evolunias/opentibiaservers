import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-brazil');
}

export default function MidhemWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-brazil" />;
}
