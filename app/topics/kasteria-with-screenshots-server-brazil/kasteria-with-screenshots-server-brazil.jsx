import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-brazil');
}

export default function KasteriaWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-brazil" />;
}
