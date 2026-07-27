import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-screenshots-server-sweden');
}

export default function NostaltherWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-screenshots-server-sweden" />;
}
