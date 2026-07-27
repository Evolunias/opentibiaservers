import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-ot');
}

export default function OldSchoolXanteriaOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-ot" />;
}
