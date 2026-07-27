import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-ots');
}

export default function NewGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-ots" />;
}
