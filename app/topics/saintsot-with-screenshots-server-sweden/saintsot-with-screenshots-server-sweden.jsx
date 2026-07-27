import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-screenshots-server-sweden');
}

export default function SaintsotWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-screenshots-server-sweden" />;
}
