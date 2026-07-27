import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-screenshots-server-argentina');
}

export default function EvoluniaWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-screenshots-server-argentina" />;
}
