import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-trainers-server-south-america');
}

export default function TibianusWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-trainers-server-south-america" />;
}
