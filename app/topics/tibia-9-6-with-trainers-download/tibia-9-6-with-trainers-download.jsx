import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-trainers-download');
}

export default function Tibia96WithTrainersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-trainers-download" />;
}
