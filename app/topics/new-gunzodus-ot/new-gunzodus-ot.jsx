import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-ot');
}

export default function NewGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-ot" />;
}
