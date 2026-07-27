import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-official');
}

export default function NewGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-official" />;
}
