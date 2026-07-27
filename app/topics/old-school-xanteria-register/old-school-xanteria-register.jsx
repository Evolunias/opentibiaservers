import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-register');
}

export default function OldSchoolXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-register" />;
}
