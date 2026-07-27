import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-otmadness-private-server');
}

export default function OldSchoolOtmadnessPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-otmadness-private-server" />;
}
