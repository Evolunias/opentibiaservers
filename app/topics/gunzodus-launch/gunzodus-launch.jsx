import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-launch');
}

export default function GunzodusLaunchKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-launch" />;
}
