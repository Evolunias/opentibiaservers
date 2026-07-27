import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-ot');
}

export default function OldSchoolOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-ot" />;
}
