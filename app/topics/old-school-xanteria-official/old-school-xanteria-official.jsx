import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-official');
}

export default function OldSchoolXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-official" />;
}
