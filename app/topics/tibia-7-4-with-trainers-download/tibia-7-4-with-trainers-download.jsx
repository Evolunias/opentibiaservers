import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-trainers-download');
}

export default function Tibia74WithTrainersDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-trainers-download" />;
}
