import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-trainers-server-argentina');
}

export default function GunzodusWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-trainers-server-argentina" />;
}
