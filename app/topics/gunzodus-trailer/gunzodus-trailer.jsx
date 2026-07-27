import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-trailer');
}

export default function GunzodusTrailerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-trailer" />;
}
