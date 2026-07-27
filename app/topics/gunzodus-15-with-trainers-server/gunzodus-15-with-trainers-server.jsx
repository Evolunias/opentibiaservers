import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-with-trainers-server');
}

export default function Gunzodus15WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-with-trainers-server" />;
}
