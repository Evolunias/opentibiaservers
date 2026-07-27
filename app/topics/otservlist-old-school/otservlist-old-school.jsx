import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-old-school');
}

export default function OtservlistOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="otservlist-old-school" />;
}
