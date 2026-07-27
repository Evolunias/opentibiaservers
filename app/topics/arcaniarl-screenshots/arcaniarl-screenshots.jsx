import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-screenshots');
}

export default function ArcaniarlScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-screenshots" />;
}
