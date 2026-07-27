import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-vip');
}

export default function GunzodusVipKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-vip" />;
}
