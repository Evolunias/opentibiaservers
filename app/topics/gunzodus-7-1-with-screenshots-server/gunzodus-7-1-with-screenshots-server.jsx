import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-1-with-screenshots-server');
}

export default function Gunzodus71WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-1-with-screenshots-server" />;
}
