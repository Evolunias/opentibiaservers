import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-screenshots');
}

export default function KasteriaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="kasteria-screenshots" />;
}
