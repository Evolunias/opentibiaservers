import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-trainers-server-brazil');
}

export default function GunzodusWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-trainers-server-brazil" />;
}
