import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-sweden');
}

export default function CanobWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-sweden" />;
}
