import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-with-screenshots-server');
}

export default function Gunzodus12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-with-screenshots-server" />;
}
