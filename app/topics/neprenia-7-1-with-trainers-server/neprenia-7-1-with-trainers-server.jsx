import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-with-trainers-server');
}

export default function Neprenia71WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-with-trainers-server" />;
}
