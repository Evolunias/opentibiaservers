import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot');
}

export default function OldSchoolZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot" />;
}
