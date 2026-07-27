import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-server');
}

export default function FreshStartGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-server" />;
}
