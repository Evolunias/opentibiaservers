import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-screenshots-server-brazil');
}

export default function GunzodusWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-screenshots-server-brazil" />;
}
