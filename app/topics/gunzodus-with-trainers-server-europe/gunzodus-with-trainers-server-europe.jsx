import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-trainers-server-europe');
}

export default function GunzodusWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-trainers-server-europe" />;
}
