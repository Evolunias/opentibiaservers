import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-argentina');
}

export default function TibianusOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-argentina" />;
}
