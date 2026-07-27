import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-private-server');
}

export default function OldSchoolRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-private-server" />;
}
