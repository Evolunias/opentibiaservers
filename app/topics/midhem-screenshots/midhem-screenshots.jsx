import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-screenshots');
}

export default function MidhemScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="midhem-screenshots" />;
}
