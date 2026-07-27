import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-trainers-download');
}

export default function Tibia71WithTrainersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-trainers-download" />;
}
