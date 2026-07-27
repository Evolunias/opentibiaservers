import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-screenshots-server-france');
}

export default function GunzodusWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-screenshots-server-france" />;
}
