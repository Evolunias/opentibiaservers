import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-screenshots-server-sweden');
}

export default function AureraGlobalWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-screenshots-server-sweden" />;
}
