import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-ots');
}

export default function OldSchoolOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-ots" />;
}
