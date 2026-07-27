import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-with-trainers-server');
}

export default function Gunzodus74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-with-trainers-server" />;
}
