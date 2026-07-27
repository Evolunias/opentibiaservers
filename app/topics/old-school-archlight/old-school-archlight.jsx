import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight');
}

export default function OldSchoolArchlightKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight" />;
}
