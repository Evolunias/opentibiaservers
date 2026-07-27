import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-trainers-download');
}

export default function Tibia80WithTrainersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-trainers-download" />;
}
