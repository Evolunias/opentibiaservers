import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-screenshots-server-sweden');
}

export default function TibiantisWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-screenshots-server-sweden" />;
}
