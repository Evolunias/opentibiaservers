import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-sweden');
}

export default function BlazeraWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-sweden" />;
}
