import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-screenshots-server-germany');
}

export default function EvoluniaWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-screenshots-server-germany" />;
}
