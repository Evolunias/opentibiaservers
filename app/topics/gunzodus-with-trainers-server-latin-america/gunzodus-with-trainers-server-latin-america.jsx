import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-trainers-server-latin-america');
}

export default function GunzodusWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-trainers-server-latin-america" />;
}
