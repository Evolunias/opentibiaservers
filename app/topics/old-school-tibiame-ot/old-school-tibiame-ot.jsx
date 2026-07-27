import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-ot');
}

export default function OldSchoolTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-ot" />;
}
