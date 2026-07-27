import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-low-exp-server-poland');
}

export default function GunzodusLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-low-exp-server-poland" />;
}
