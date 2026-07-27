import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-ot-server');
}

export default function OldSchoolZuneraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-ot-server" />;
}
