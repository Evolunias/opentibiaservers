import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-trainers-server-usa');
}

export default function GunzodusWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-trainers-server-usa" />;
}
