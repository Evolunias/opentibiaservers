import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-screenshots-server-chile');
}

export default function GunzodusWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-screenshots-server-chile" />;
}
