import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-screenshots-server-brazil');
}

export default function EvoluniaWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-screenshots-server-brazil" />;
}
