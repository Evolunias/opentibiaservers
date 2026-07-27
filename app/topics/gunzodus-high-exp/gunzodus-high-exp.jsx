import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp');
}

export default function GunzodusHighExpKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp" />;
}
