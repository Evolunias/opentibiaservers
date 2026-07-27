import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-screenshots-server-usa');
}

export default function GunzodusWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-screenshots-server-usa" />;
}
