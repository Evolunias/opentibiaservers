import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-screenshots-server-uk');
}

export default function GunzodusWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-screenshots-server-uk" />;
}
