import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-open-tibia-server-argentina');
}

export default function OldSchoolOpenTibiaServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-open-tibia-server-argentina" />;
}
