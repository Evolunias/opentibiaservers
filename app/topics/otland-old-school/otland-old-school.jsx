import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-old-school');
}

export default function OtlandOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="otland-old-school" />;
}
