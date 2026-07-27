import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-with-trainers-server');
}

export default function Neprenia11WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-with-trainers-server" />;
}
