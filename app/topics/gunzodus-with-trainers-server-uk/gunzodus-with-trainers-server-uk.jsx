import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-trainers-server-uk');
}

export default function GunzodusWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-trainers-server-uk" />;
}
