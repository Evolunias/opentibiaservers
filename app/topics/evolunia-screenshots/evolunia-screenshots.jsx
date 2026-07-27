import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-screenshots');
}

export default function EvoluniaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="evolunia-screenshots" />;
}
