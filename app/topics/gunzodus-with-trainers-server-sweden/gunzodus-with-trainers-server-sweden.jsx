import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-trainers-server-sweden');
}

export default function GunzodusWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-trainers-server-sweden" />;
}
