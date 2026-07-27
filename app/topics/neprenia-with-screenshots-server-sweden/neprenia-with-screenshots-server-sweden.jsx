import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-sweden');
}

export default function NepreniaWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-sweden" />;
}
