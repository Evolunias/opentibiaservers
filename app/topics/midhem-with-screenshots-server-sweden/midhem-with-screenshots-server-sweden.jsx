import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-sweden');
}

export default function MidhemWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-sweden" />;
}
