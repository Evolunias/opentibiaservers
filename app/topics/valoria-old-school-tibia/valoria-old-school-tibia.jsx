import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-old-school-tibia');
}

export default function ValoriaOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="valoria-old-school-tibia" />;
}
