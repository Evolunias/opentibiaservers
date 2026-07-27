import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-ot');
}

export default function GunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-ot" />;
}
