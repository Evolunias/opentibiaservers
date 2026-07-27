import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-with-trainers-server');
}

export default function Neprenia13WithTrainersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-with-trainers-server" />;
}
