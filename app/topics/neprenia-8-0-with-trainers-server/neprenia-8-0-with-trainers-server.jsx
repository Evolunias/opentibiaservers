import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-0-with-trainers-server');
}

export default function Neprenia80WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-0-with-trainers-server" />;
}
