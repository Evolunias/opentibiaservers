import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-tibia');
}

export default function OldSchoolTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-tibia" />;
}
