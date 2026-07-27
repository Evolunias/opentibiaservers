import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-ot');
}

export default function FreshStartGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-ot" />;
}
