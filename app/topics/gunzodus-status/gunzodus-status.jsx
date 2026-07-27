import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-status');
}

export default function GunzodusStatusKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-status" />;
}
