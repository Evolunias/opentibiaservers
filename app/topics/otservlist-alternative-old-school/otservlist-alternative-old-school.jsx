import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-old-school');
}

export default function OtservlistAlternativeOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-old-school" />;
}
