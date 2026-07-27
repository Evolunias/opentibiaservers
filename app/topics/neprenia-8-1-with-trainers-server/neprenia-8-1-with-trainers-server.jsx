import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-with-trainers-server');
}

export default function Neprenia81WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-with-trainers-server" />;
}
