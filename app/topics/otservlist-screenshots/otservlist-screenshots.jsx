import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-screenshots');
}

export default function OtservlistScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="otservlist-screenshots" />;
}
