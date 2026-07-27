import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-register');
}

export default function OldSchoolTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-register" />;
}
