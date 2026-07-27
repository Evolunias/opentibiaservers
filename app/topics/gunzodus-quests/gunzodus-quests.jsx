import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-quests');
}

export default function GunzodusQuestsKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-quests" />;
}
