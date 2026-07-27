import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-screenshots-server-uk');
}

export default function EvoluniaWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-screenshots-server-uk" />;
}
