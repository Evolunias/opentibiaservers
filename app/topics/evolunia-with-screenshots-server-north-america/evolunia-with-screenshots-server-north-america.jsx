import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-screenshots-server-north-america');
}

export default function EvoluniaWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-screenshots-server-north-america" />;
}
