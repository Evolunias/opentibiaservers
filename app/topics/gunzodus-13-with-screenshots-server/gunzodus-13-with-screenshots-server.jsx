import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-with-screenshots-server');
}

export default function Gunzodus13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-with-screenshots-server" />;
}
