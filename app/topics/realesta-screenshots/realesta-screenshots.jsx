import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-screenshots');
}

export default function RealestaScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="realesta-screenshots" />;
}
