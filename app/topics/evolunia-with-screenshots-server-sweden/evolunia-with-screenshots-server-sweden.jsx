import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-screenshots-server-sweden');
}

export default function EvoluniaWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-screenshots-server-sweden" />;
}
