import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-with-trainers-server');
}

export default function Neprenia76WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-with-trainers-server" />;
}
