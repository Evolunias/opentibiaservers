import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-reset');
}

export default function GunzodusResetKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-reset" />;
}
