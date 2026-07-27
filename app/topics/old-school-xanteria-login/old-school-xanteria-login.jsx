import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-login');
}

export default function OldSchoolXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-login" />;
}
