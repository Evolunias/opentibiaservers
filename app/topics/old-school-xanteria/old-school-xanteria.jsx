import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria');
}

export default function OldSchoolXanteriaKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria" />;
}
