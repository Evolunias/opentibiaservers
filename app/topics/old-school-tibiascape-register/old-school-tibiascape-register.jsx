import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-register');
}

export default function OldSchoolTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-register" />;
}
