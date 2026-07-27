import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-sweden');
}

export default function TibianusWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-sweden" />;
}
