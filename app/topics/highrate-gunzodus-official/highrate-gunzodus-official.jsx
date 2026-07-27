import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-official');
}

export default function HighrateGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-official" />;
}
