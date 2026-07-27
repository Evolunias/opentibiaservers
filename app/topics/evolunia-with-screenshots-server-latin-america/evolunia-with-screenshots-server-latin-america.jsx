import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-screenshots-server-latin-america');
}

export default function EvoluniaWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-screenshots-server-latin-america" />;
}
