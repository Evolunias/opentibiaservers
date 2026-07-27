import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-with-screenshots-server');
}

export default function Gunzodus80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-with-screenshots-server" />;
}
