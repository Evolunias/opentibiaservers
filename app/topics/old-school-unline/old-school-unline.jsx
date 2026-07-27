import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-unline');
}

export default function OldSchoolUnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-unline" />;
}
