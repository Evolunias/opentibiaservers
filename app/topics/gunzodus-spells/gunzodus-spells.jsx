import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-spells');
}

export default function GunzodusSpellsKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-spells" />;
}
