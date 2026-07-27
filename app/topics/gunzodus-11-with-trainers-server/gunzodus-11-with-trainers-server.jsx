import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-with-trainers-server');
}

export default function Gunzodus11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-with-trainers-server" />;
}
