import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-login');
}

export default function FreshStartGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-login" />;
}
