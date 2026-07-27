import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-official');
}

export default function FreshStartGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-official" />;
}
