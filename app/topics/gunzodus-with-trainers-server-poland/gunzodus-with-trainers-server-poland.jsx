import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-trainers-server-poland');
}

export default function GunzodusWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-trainers-server-poland" />;
}
