import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-open-tibia-server-brazil');
}

export default function OldSchoolOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-open-tibia-server-brazil" />;
}
