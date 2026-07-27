import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-usa');
}

export default function TibianusOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-usa" />;
}
