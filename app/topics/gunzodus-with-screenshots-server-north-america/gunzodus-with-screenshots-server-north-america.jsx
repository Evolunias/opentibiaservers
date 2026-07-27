import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-screenshots-server-north-america');
}

export default function GunzodusWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-screenshots-server-north-america" />;
}
