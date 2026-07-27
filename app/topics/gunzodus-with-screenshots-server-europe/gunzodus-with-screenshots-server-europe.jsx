import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-screenshots-server-europe');
}

export default function GunzodusWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-screenshots-server-europe" />;
}
