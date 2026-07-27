import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-with-trainers-server');
}

export default function Neprenia14WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-with-trainers-server" />;
}
