import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-private-server-europe');
}

export default function OldSchoolTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-private-server-europe" />;
}
