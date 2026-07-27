import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-calmera-ot-private-server');
}

export default function OldSchoolCalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-calmera-ot-private-server" />;
}
