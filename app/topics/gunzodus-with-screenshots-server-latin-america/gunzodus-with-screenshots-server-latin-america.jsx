import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-screenshots-server-latin-america');
}

export default function GunzodusWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-screenshots-server-latin-america" />;
}
