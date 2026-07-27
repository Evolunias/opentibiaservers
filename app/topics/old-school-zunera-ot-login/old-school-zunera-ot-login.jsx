import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-login');
}

export default function OldSchoolZuneraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-login" />;
}
