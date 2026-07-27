import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-with-screenshots-server');
}

export default function Gunzodus15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-with-screenshots-server" />;
}
