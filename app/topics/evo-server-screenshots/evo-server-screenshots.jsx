import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-screenshots');
}

export default function EvoServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="evo-server-screenshots" />;
}
