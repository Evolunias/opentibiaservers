import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-screenshots-server-poland');
}

export default function EvoluniaWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-screenshots-server-poland" />;
}
