import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-screenshots-server-sweden');
}

export default function ThorniaWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-screenshots-server-sweden" />;
}
