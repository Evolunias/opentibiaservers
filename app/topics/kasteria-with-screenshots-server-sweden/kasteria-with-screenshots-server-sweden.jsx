import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-sweden');
}

export default function KasteriaWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-sweden" />;
}
