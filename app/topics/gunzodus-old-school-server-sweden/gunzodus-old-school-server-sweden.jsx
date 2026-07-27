import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-old-school-server-sweden');
}

export default function GunzodusOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-old-school-server-sweden" />;
}
