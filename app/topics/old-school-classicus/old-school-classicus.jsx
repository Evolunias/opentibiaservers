import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classicus');
}

export default function OldSchoolClassicusKeywordPage() {
  return <StaticKeywordPage slug="old-school-classicus" />;
}
