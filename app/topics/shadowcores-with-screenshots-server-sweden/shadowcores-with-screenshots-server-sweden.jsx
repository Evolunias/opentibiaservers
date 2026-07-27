import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-screenshots-server-sweden');
}

export default function ShadowcoresWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-screenshots-server-sweden" />;
}
