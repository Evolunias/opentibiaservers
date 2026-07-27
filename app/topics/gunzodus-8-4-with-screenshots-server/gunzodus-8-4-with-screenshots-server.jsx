import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-with-screenshots-server');
}

export default function Gunzodus84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-with-screenshots-server" />;
}
