import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-trainers-server-france');
}

export default function GunzodusWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-trainers-server-france" />;
}
