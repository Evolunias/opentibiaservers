import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-ot');
}

export default function HighrateGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-ot" />;
}
