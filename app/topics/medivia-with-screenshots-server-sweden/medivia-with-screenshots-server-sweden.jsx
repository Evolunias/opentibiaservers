import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-sweden');
}

export default function MediviaWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-sweden" />;
}
