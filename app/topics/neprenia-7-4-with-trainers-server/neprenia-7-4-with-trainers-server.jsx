import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-with-trainers-server');
}

export default function Neprenia74WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-with-trainers-server" />;
}
