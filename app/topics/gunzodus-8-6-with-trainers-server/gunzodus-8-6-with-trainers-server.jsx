import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-with-trainers-server');
}

export default function Gunzodus86WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-with-trainers-server" />;
}
