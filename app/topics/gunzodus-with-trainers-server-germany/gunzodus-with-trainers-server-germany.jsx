import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-trainers-server-germany');
}

export default function GunzodusWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-trainers-server-germany" />;
}
