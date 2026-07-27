import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-screenshots-server-mexico');
}

export default function EvoluniaWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-screenshots-server-mexico" />;
}
