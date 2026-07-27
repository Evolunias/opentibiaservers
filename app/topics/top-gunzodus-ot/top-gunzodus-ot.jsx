import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-ot');
}

export default function TopGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-ot" />;
}
