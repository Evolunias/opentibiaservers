import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-screenshots');
}

export default function RealeraScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="realera-screenshots" />;
}
