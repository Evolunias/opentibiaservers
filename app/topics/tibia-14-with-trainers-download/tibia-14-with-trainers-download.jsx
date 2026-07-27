import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-download');
}

export default function Tibia14WithTrainersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-download" />;
}
