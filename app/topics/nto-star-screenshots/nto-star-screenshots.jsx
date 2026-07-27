import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-screenshots');
}

export default function NtoStarScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="nto-star-screenshots" />;
}
