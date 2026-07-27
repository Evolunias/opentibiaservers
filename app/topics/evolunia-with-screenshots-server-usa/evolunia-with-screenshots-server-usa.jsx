import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-screenshots-server-usa');
}

export default function EvoluniaWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-screenshots-server-usa" />;
}
