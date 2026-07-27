import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-trainers-server-north-america');
}

export default function GunzodusWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-trainers-server-north-america" />;
}
