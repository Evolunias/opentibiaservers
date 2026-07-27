import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-register');
}

export default function OldSchoolZuneraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-register" />;
}
