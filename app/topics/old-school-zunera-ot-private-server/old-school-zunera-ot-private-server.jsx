import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-private-server');
}

export default function OldSchoolZuneraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-private-server" />;
}
