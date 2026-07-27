import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-ots');
}

export default function FreshStartGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-ots" />;
}
