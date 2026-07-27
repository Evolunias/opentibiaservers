import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus');
}

export default function FreshStartGunzodusKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus" />;
}
