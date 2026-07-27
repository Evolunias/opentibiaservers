import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-client');
}

export default function OldSchoolZuneraOtClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-client" />;
}
