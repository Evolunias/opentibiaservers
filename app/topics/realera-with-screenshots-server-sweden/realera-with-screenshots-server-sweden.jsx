import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-sweden');
}

export default function RealeraWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-sweden" />;
}
