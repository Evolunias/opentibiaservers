import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-launcher');
}

export default function GunzodusLauncherKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-launcher" />;
}
