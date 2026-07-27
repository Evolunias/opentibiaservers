import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibia-server-europe');
}

export default function OldSchoolTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibia-server-europe" />;
}
