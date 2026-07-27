import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-sweden');
}

export default function LumineraWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-sweden" />;
}
