import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-screenshots');
}

export default function OtservlistAlternativeScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-screenshots" />;
}
