import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-screenshots-server-sweden');
}

export default function GunzodusWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-screenshots-server-sweden" />;
}
