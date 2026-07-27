import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-screenshots-server-sweden');
}

export default function AlasteraWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-screenshots-server-sweden" />;
}
