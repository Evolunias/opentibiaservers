import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-low-exp-server-uk');
}

export default function GunzodusLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-low-exp-server-uk" />;
}
