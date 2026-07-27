import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-low-exp-server-germany');
}

export default function GunzodusLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-low-exp-server-germany" />;
}
