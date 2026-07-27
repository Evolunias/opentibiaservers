import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-trainers-download');
}

export default function Tibia86WithTrainersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-trainers-download" />;
}
