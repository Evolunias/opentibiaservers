import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-argentina');
}

export default function MidhemWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-argentina" />;
}
