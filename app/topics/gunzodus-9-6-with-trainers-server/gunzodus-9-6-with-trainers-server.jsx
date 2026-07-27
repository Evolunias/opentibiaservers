import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-9-6-with-trainers-server');
}

export default function Gunzodus96WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-9-6-with-trainers-server" />;
}
