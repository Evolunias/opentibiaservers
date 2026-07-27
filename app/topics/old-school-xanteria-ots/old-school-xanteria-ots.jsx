import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-ots');
}

export default function OldSchoolXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-ots" />;
}
