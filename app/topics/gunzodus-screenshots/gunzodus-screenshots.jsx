import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-screenshots');
}

export default function GunzodusScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-screenshots" />;
}
