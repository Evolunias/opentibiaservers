import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-with-trainers-server');
}

export default function Gunzodus84WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-with-trainers-server" />;
}
