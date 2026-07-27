import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-trainers-download');
}

export default function Tibia11WithTrainersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-trainers-download" />;
}
