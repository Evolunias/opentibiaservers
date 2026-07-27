import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-with-screenshots-server');
}

export default function Gunzodus14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-with-screenshots-server" />;
}
