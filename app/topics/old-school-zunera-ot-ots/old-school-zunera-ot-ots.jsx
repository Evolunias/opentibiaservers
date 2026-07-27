import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-ots');
}

export default function OldSchoolZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-ots" />;
}
