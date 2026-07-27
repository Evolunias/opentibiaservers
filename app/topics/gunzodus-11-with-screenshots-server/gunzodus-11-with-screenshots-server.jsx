import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-with-screenshots-server');
}

export default function Gunzodus11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-with-screenshots-server" />;
}
